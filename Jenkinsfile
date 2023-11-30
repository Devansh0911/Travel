pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your Git repository
                git 'https://github.com/Devansh0911/Travel/tree/main'
            }
        }

        stage('Build and Deploy') {
            steps {
                // Install dependencies and build the React app
                sh 'npm install'
                sh 'npm run build'

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
