pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your Git repository
                git 'https://github.com/Devansh0911/Travel.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm (adjust versions as needed)
                sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
                
                // Install project dependencies
                sh 'npm install'
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
