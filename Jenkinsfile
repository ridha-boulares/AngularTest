pipeline {
    agent any
    
    stages {
       
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
            post {
        failure {
            emailext body: 'Mvn Clean failure', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Pipeline Failure'
        }
        }
        
        stage('Build') {
            steps {
                sh 'ng build --prod'
            }
            post {
        failure {
            emailext body: 'Mvn Clean failure', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Pipeline Failure'
        }
        
        }
        
        stage('launch') {
            steps {
                sh 'ng serve -o'
            }
            post {
        failure {
            emailext body: 'Mvn Clean failure', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Pipeline Failure'
        }
         
        }
        
        
    }
}
