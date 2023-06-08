pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh ' install'
            }
            post {
                failure {
                    emailext body: 'npm install failure', recipientProviders: $DEFAULT_RECIPIENTS , subject: 'Pipeline Failure'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'ng build --prod'
            }
            post {
                failure {
                    emailext body: 'ng build failure', recipientProviders: $DEFAULT_RECIPIENTS, subject: 'Pipeline Failure'
                }
            }
        }

        stage('Launch') {
            steps {
                sh 'ng serve -o'
            }
            post {
                failure {
                    emailext body: 'ng serve failure', recipientProviders: $DEFAULT_RECIPIENTS, subject: 'Pipeline Failure'
                }
            }
        }
    }
}
