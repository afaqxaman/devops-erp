terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# SSH Key
resource "aws_key_pair" "devops_key" {
  key_name   = "devops-key"
  public_key = file("~/.ssh/devops-key.pub")
}

# VPC
resource "aws_vpc" "erp_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "devops-erp-vpc"
  }
}

# Subnet
resource "aws_subnet" "erp_subnet" {
  vpc_id                  = aws_vpc.erp_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true
  tags = {
    Name = "devops-erp-subnet"
  }
}

# Internet Gateway
resource "aws_internet_gateway" "erp_igw" {
  vpc_id = aws_vpc.erp_vpc.id
  tags = {
    Name = "devops-erp-igw"
  }
}

# Route Table
resource "aws_route_table" "erp_rt" {
  vpc_id = aws_vpc.erp_vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.erp_igw.id
  }
}

resource "aws_route_table_association" "erp_rta" {
  subnet_id      = aws_subnet.erp_subnet.id
  route_table_id = aws_route_table.erp_rt.id
}

# Security Group
resource "aws_security_group" "erp_sg" {
  name   = "devops-erp-sg"
  vpc_id = aws_vpc.erp_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "devops-erp-sg"
  }
}

# EC2
resource "aws_instance" "erp_server" {
  ami                    = "ami-0c02fb55956c7d316"
  instance_type          = "t3.micro"
  subnet_id              = aws_subnet.erp_subnet.id
  vpc_security_group_ids = [aws_security_group.erp_sg.id]
  key_name               = aws_key_pair.devops_key.key_name

  tags = {
    Name = "devops-erp-server"
  }
}

# Output
output "public_ip" {
  value = aws_instance.erp_server.public_ip
}