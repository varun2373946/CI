{
  "pipeline": {
    "agent": "any",
    "tools": {
      "maven": "Maven"
    },
    "environment": {
      "AWS_REGION": "ap-south-1",
      "SONAR_URL": "http://65.0.4.157:9000",
      "AWS_ACCOUNT_ID": "476114133216",
      "REPO_NAME": "main",
      "BUILD_NUMBER": "${env.BUILD_NUMBER}",
      "S3_BUCKET": "varuns3",
      "IMAGE_NAME": "your-image-name"
    },
    "stages": [
      {
        "stage": "Checkout Code",
        "steps": [
          {
            "script": "echo \"Checking out code...\" && checkout scm"
          }
        ]
      },
      {
        "stage": "Build and Package",
        "steps": [
          {
            "script": "echo \"Building and packaging...\" && sh \"mvn clean package -Dmaven.test.skip=true | tee mvn_build.log\""
          },
          {
            "archiveArtifacts": {
              "artifacts": "mvn_build.log",
              "fingerprint": true
            }
          }
        ]
      },
      {
        "stage": "SonarQube Analysis",
        "steps": [
          {
            "script": "echo \"Running SonarQube analysis\""
          },
          {
            "script": "mvn Sonar:Sonar -Dsonar.host.url=${SONAR_URL} -Dsonar.login=${SONAR_TOKEN}"
          }
        ]
      },
      {
        "stage": "Docker Build",
        "steps": [
          {
            "script": "echo \"Building Docker image\" && sh \"docker build -t ${IMAGE_NAME} .\""
          }
        ]
      }
    ],
    "post": {
      "success": {
        "script": "echo \"Pipeline executed successfully!\""
      },
      "failure": {
        "script": "echo \"Pipeline execution failed!\""
      }
    }
  }
}

