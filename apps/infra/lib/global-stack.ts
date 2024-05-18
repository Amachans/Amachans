import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { DomainStack } from "./stacks/domain/stack";
import { ICertificate } from "aws-cdk-lib/aws-certificatemanager";
import { IHostedZone } from "aws-cdk-lib/aws-route53";

export class GlobalStack extends cdk.Stack {
  certificate: ICertificate;
  hostedZone: IHostedZone;

  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const domainStack = new DomainStack(this, "domain", props);

    this.certificate = domainStack.certUsEast;
    this.hostedZone = domainStack.hostedZone;
  }
}
