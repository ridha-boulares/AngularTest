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
      
  stage('Upload Nexus') {
            steps {
                script {
                    def nexusUrl = 'http://192.168.217.133:8081'
                    def repository = 'jenkins'
                    def fileToUpload = 'dist/'

                    sh "curl -v -u admin:Facebook^^123 --upload-file ${fileToUpload} ${nexusUrl}/repository/${repository}/"

                    // or you can use Nexus REST API for more advanced options
                    // sh "curl -v -u username:password -X POST -H 'Content-Type: application/json' -d '{\"parameters\": {\"file\": \"${fileToUpload}\", \"type\": \"zip\"}}' ${nexusUrl}/service/rest/v1/components?repository=${repository}"
                }
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
