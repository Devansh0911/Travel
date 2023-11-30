pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js and npm
                    sh 'sudo apt-get update'
                    sh 'sudo apt-get install -y nodejs'
                    sh 'sudo apt-get install -y npm'

                    // Install project dependencies (adjust the command based on your project)
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build your project (adjust the command based on your project)
                    sh 'npm run build'
                }
            }
        }

        // Add more stages as needed (e.g., testing, deployment)
    }

    post {
        always {
            // Clean up or perform actions that should happen regardless of the build result
        }
    }
}
