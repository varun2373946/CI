pipeline {
    agent any

    environment {
        AWS_REGION = "ap-south-1"
        ECR_REPO = "476114133216.dkr.ecr.ap-south-1.amazonaws.com"
        IMAGE_NAME = "my-node-app"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', credentialsId: 'git', url: 'https://github.com/varun2373946/CI.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
                }
            }
        }

        stage('Authenticate to AWS ECR') {
            steps {
                script {
                    sh '''
                    export AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY
                    export AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY
                    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}
                    '''
                }
            }
        }

        stage('Tag Docker Image') {
            steps {
                script {
                    sh 'docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${ECR_REPO}/${IMAGE_NAME}:${IMAGE_TAG}'
                }
            }
        }

        stage('Push Docker Image to ECR') {
            steps {
                script {
                    sh 'docker push ${ECR_REPO}/${IMAGE_NAME}:${IMAGE_TAG}'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
