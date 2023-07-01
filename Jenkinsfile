pipeline {
    agent any
    stages {


        stage('liste files') {
            steps {
                sh 'ls -lat'
            }
           
        }


      
       stage('Install Dependencies') {
            steps {
                script {
                    
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }


       
        stage('Build') {
            steps {
                sh 'CI=false npm run build'
            }
           
        }
       stage('Zip Dist') {
            steps {
                // Zip the 'dist' directory
                sh 'tar -czf dist.tar.gz dist'
            }
        }
        
      
  stage('Publish to Nexus') {
            steps {
               nexusArtifactUploader artifacts:
                 [
                   [artifactId: 'my-artifact', 
                    classifier: '', 
                    file: 'dist.tar.gz', 
                    type: 'tar.gz']
                 ], 
                 credentialsId: 'nexus', 
                 groupId: 'com.example', 
                 nexusUrl: '192.168.217.133:8081', 
                 nexusVersion: 'nexus3', 
                 protocol: 'http', 
                 repository: '/repository/jenkins', 
                 version: '1.0.0'
            }
        }

      










        stage('liste2 files') {
            steps {
                sh 'ls -lat'
            }
           
        }
         stage('launch') {
            steps {
                sh 'ng serve -o'
            }
           
        }

        // stage('Launch') {
        //     steps {
        //         sh 'ng serve -o'
        //     }
        //     post {
        //         failure {
        //              emailext (attachLog: true, body: 'this stage was failed, this is the build result', subject: 'Launch failure', to: 'metjaku@gmail.com')
        //         }
        //     }
        // }
    }
}
