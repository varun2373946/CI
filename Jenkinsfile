pipeline {
    agent any
    tools {
        maven 'Maven'  // Ensure 'Maven' is configured in Jenkins Global Tool Configuration
    }
    environment {
        AWS_REGION = "ap-south-1"
        SONAR_URL = http://65.0.4.157:9000
        AWS_ACCOUNT_ID = "476114133216"
        REPO_NAME = "main"
        BUILD_NUMBER = "${env.BUILD_NUMBER}"
        S3_BUCKET = "varuns3" 
    }
    stages {
        stage("Checkout Code") {
            steps {
                script {
                    echo "Checking out code..."
                    checkout scm
                }
            }
        }
        stage("Build and Package") {
            steps {
                script {
                    sh "$MAVEN_HOME/bin/mvn clean package -Dmaven.test.skip=true | tee mvn_build.log"
                    archiveArtifacts artifacts: 'mvn_build.log', fingerprint: true
                }
            }
        }
        stage("Sonar Analysis") {
            steps {
                script {
                    echo "Running Sonar analysis for 'main' branch"
                    withSonarQubeEnv('Sonar') { // Using the correct Jenkins SonarQube credentials ID
                       sh """
                            $MAVEN_HOME/bin/mvn Sonar:Sonar -Dsonar.host.url=${SONAR_URL}
                        """
                    }
                }
            }
        }
        stage("Docker Build") {
            steps {
                script {
                    echo "Building Docker image"
                    sh "docker build -t ${IMAGE_NAME} ."
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
