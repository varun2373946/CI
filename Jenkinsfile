pipeline {
    agent any

    environment {
        AWS_REGION = "ap-south-1"  // AWS Region
        AWS_ACCOUNT_ID = "476114133216"  // Your AWS account ID
        ECR_REPO_NAME = "tes"  // Replace with your ECR repository name
        IMAGE_NAME = "test"  // Docker image name
        DOCKER_TAG = "latest"  // Docker tag
        DOCKER_REGISTRY_URL = "476114133216.dkr.ecr.ap-south-1.amazonaws.com/tes"  // ECR registry URL
        AWS_DEFAULT_REGION = "ap-south-1"  // Default AWS region for AWS CLI
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/varun2373946/CI.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t my-node-app .'
                }
            }
        }

        stage('Authenticate to AWS ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 476114133216.dkr.ecr.ap-south-1.amazonaws.com'
                }
            }
        }

        stage('Tag Docker Image') {
            steps {
                script {
                    sh 'docker tag my-node-app:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:$IMAGE_TAG'
                }
            }
        }

        stage('Push Docker Image to ECR') {
            steps {
                script {
                    sh 'docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:$IMAGE_TAG'
                }
            }
        }
    }
}
