pipeline {
    agent any

    stages {


        stage('Checkout GIT') {
            steps {
                echo 'Pulling... '
                git branch: 'main',
                    credentialsId: 'ridha_boulares',
                    url: 'https://github.com/ridha-boulares/AngularTest.git'
            }
        }


        stage('liste files') {
            steps {
                sh 'ls -lat'
            }
            post {
                failure {
                    emailext (attachLog: true, body: 'this stage was failed, this is the build result', subject: 'listing failure', to: 'metjaku@gmail.com')
                }
            }
        }


        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
            post {
                failure {
                    emailext (attachLog: true, body: 'this stage was failed, this is the build result', subject: 'Install failure', to: 'metjaku@gmail.com')
                }
            }
        }

       
        stage('Build') {
            steps {
                sh 'ng build --prod'
            }
            post {
                failure {
                    emailext (attachLog: true, body: 'this stage was failed, this is the build result', subject: 'build failure', to: 'metjaku@gmail.com')
                }
            }
        }


        stage('liste files') {
            steps {
                sh 'ls -lat'
            }
            post {
                failure {
                    emailext (attachLog: true, body: 'this stage was failed, this is the build result', subject: 'listing failure', to: 'metjaku@gmail.com')
                }
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
