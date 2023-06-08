pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh ' install'
            }
            post {
                failure {
                    emailext body: 'npm install failure', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Pipeline Failure'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'ng build --prod'
            }
            post {
                failure {
                    emailext body: 'ng build failure', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Pipeline Failure'
                }
            }
        }

        stage('Launch') {
            steps {
                sh 'ng serve -o'
            }
            post {
                failure {
                    emailext body: 'ng serve failure', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Pipeline Failure'
                }
            }
        }
    }
}
