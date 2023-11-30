pipeline {
    agent any

    stages {
         stage('Install Node.js and npm') {
            steps {
                script {
                    sh 'sudo apt-get update'
                    sh 'sudo apt-get install -y nodejs'
                    sh 'sudo apt-get install -y npm'
                }
            }
        }

       
        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the React app (customize based on your deployment strategy)
                echo "deploy"
            }
        }
    }

    post {
        success {
            // Notify on success (you can customize this, e.g., send an email)
            echo 'Build and deployment successful!'
        }
        failure {
            // Notify on failure (you can customize this, e.g., send an email)
            echo 'Build or deployment failed!'
        }
    }
}
