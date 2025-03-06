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
        stage("Checkout Code") {
            steps {
                script {
                    echo "Checking out code..."
                    checkout scm  // This checks out the code from the Git repository
                }
            }
        }

        stage("Build Docker Image") {
            steps {
                script {
                    echo "Building Docker image..."
                    // Build the Docker image
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage("Authenticate to ECR") {
            steps {
                script {
                    echo "Authenticating Docker to Amazon ECR..."
                    // Authenticate Docker to ECR using AWS CLI
                    sh """
                    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${DOCKER_REGISTRY_URL}
                    """
                }
            }
        }

        stage("Tag Docker Image") {
            steps {
                script {
                    echo "Tagging Docker image..."
                    // Tag the Docker image to the ECR repository
                    sh "docker tag ${IMAGE_NAME}:latest ${DOCKER_REGISTRY_URL}/${ECR_REPO_NAME}:${DOCKER_TAG}"
                }
            }
        }

        stage("Push Docker Image to ECR") {
            steps {
                script {
                    echo "Pushing Docker image to ECR..."
                    // Push the Docker image to ECR
                    sh "docker push ${DOCKER_REGISTRY_URL}/${ECR_REPO_NAME}:${DOCKER_TAG}"
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline execution failed!"
        }
    }
}
