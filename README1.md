# aws-elasticbeanstalk-sample
Sample application written in node.js for demo purposes related to deploying to AWS Elastic Beanstalk

## Clone node application

1. git clone `git@github.com:wsieroci/aws-elasticbeanstalk-sample.git`
2. `cd` into it

## Run environment locally

1. `docker-compose up --build` - command will rebuild environment (if there are changes) prior to running it

## Pushing image to Docker Hub

1. `docker images`
2. `docker tag fb2547b19d23 wsieroci/sample-postgres-node:latest`
3. `docker login`
4. `docker push wsieroci/sample-postgres-node:latest`

## Create AIM user

1. Choose name: wiktorsierocinski-demo
2. Copy Access Key, Secret Key, Password and login url
3. Pass them to user

## Install aws eb cli

1. Maybe install the newest version: `pip install -U pip setuptools`
2. Or maybe install python: `curl https://bootstrap.pypa.io/ez_setup.py -o - | sudo python`
3. And then install pip: `sudo easy_install pip`
4. `pip install awsebcli`

## Init of eb cli

1. `eb init` - provide `aws-access-id` and `aws-secret-key`
2. Choose application name: `wiktorsierocinski-aws-sample`
3. Choose `North Virginia` as a region
4. `.elasticbeanstalk` directory will be created in your program root directory

## Create sample environment using aws sample application

1. `eb create --sample --vpc`
2. Provide vpc id (default one): `vpc-1c032a78`
3. EC2 subnets: `subnet-1b79d143, subnet-da1687ac, subnet-da1687ac, subnet-71b2c74c`
4. Default vpc security group: `sg-6c14be14`

## Deploy application to environment

1. `eb deploy wiktorsierocinski-aws-sample-dev`
2. Be aware that this command is deploying only code which is versioned by Git
3. Be aware to properly deploy whole application the only file need is `Dockerrun.aws.json` file

## Create RDS PostgreSQL database

1. Go to RDS panel and create new database in VPC environment
2. Be aware to choose the lowest instance in regard to resources
3. Establish permissions for your EB environment to be able to make requests to your RDS DB (security groups)
4. Add environment variables to your EB environment such as: `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_PORT`
5. Restart of application will be done automatically 

## Log in to EC2 EB instance using SSH

1. `eb ssh`
2. `sudo docker ps`
3. `sudo docker logs --tail=100 --follow container_name`
4. Check if node established connection to PostgreSQL successfully


