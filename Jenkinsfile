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
                sh 'npm install'
            }
            
        }

       
        stage('Build') {
            steps {
                sh 'CI=false npm run build'
            }
           
        }
      stage('upload nexus') {
            steps {
               nexusArtifactUploader artifacts: [
                 [
                   artifactId: 'application',
                   classifier: '',
                   file: 'target/application-1.0.0.war',
                   type: 'war'
                 ]
               ], 
                 credentialsId: 'nexus',
                 groupId: 'noly-front',
                 nexusUrl: 'localhost:8081/',
                 nexusVersion: 'nexus3',
                 protocol: 'http',
                 repository: 'noly-front/',
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
