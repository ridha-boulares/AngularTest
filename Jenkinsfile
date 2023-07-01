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
      
  stage('Publish to Nexus') {
            steps {
                nexusArtifactUploader nexusInstanceId: 'nexus',
                                      repositoryUrl: 'http://192.168.217.133:8081/repository/jenkins',
                                      groupId: 'com.example',
                                      version: '1.0.0',
                                      artifacts: [
                                          // Specify the artifact details
                                          [artifactId: 'my-artifact', classifier: '', file: 'dist/my-artifact.zip', type: 'zip']
                                      ],
                                      credentialsId: 'nexus'
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
