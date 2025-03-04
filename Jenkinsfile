pipeline {
    agent any

    environment {
        SONAR_URL = "http://65.0.4.157:9000"
        AWS_REGION = "ap-south-1"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    echo "Building the project"
                    sh 'mvn clean package -Dmaven.test.skip=true'
                }
            }
        }

        stage('Sonar Analysis') {
            steps {
                script {
                    echo "Running SonarQube analysis"
                    sh "mvn Sonar:Sonar -Dsonar.host.url=${SONAR_URL}"
                }
            }
        }
    }

    post {
        success {
            echo 'Build and analysis completed successfully!'
        }

        failure {
            echo 'Build or analysis failed!'
        }
    }
}

