pipeline {
   agent {
      docker {
         image 'node:6-alpine'
         args '-p 3000:3000'
      }
   }
       stage('Build') {
            steps {
                // Build the React app
                sh 'npm install'
            }
        }        
   }
}
