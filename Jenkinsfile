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
                script {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }
      

        stage('Build') {
            steps {
                sh 'CI=false npm run build --prod'
            }
        }

        stage('Zip Dist') {
            steps {
                sh 'tar -czf dist.tar.gz dist'
            }
        }

       /* stage('Test Nexus') {
            steps {
                sh 'curl -u admin:Facebook1 -X GET http://192.168.217.133:8081/repository/jenkins/'
            }
        }
      
       stage('Publish to Nexus') {
    steps {
        nexusArtifactUploader artifacts: [
            [
                artifactId: 'test',
                classifier: '',
                file: 'dist.tar.gz',
                type: 'tar.gz'
            ]
        ],
        credentialsId: 'nexus',
        groupId: 'test',
        version: '0.0.0',
        nexusUrl: '192.168.217.133:8081',
        nexusVersion: 'nexus3',
        protocol: 'http',
        repository: 'jenkins'
    }
}*/


  stage('Docker Build') {
    steps {
        script {
            def app = docker.build("mohamedridhaa/angular_test:tagname")
        }
    }
}

      
stage('Docker Push') {
    steps {
        script {
          sh 'docker login -u mohamedridhaa -p Facebook1'
          sh 'docker push mohamedridhaa/angular_test:tagname'
            }
        }
    }

/*
stage('launch'){
  steps{
    script{
      sh 'ng serve'
    }
  }
}*/

      
    }
}
