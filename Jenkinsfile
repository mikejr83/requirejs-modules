node{
    stage ('Checkout') {
        checkout scm
    }

    stage ('Build') {
    docker.build 'my-env:snapshot'
    }
    // stage ('Restore Dependencies') {
    //     nodejs(nodeJSInstallationName: '6.x') {
    //         sh 'npm install'
    //         sh 'bower install'
    //     }
    // }
    
    // stage ('Build') {
    //     nodejs(nodeJSInstallationName: '6.x') {
    //         sh 'npm run build'
    //     }
    // }

    
}