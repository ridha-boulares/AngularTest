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
                sh 'npm install --legacy-peer-deps'
            }
            
        }

       
        stage('Build') {
            steps {
                sh 'CI=false npm run build'
            }
           
        }
      
  /*  stage('Upload Nexus') {
            steps {
                script {
                    def nexusUrl = '192.168.217.134:8081'
                    def repository = 'noly-front'
                    def fileToUpload = 'dist/'

                    nexusArtifactUploader artifacts: [
                        [
                            classifier: '',
                            file: fileToUpload,
                            type: 'zip'
                        ]
                    ],
                    credentialsId: 'nexus',
                    nexusUrl: nexusUrl,
                    nexusVersion: 'nexus3',
                    protocol: 'http',
                    repository: repository
                }
            }
        }*/
  










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
