pipeline {
    agent any

    stages {
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
                    emailext (attachLog: true, body: 'this stage was failed, this is the build result', subject: 'Build failure', to: 'metjaku@gmail.com')
                }
            }
        }

        stage('Launch') {
            steps {
                sh 'ng serve -o'
            }
            post {
                failure {
                     emailext (attachLog: true, body: 'this stage was failed, this is the build result', subject: 'Launch failure', to: 'metjaku@gmail.com')
                }
            }
        }
    }
}
