pipeline {
    agent any

    stages {
        stage('List Files') {
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

        stage('Zip Dist') {
            steps {
                sh 'tar -czf dist.tar.gz dist'
            }
        }

        stage('Test Nexus') {
            steps {
                sh 'curl -u admin:Facebook1 -X GET http://192.168.217.133:8081/repository/jenkins/'
            }
        }

        def app // Define 'app' variable at the top level

        stage('Docker Build') {
            steps {
                script {
                    app = docker.build("mohamedridhaa/angular_test:tagname")
                }
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        app.push()
                    }
                }
            }
        }

        stage('Launch') {
            steps {
                sh 'ng serve -o'
            }
        }
    }
}
