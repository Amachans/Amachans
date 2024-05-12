import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { ClientStack } from "./stacks/client/stack";
import { ICertificate } from "aws-cdk-lib/aws-certificatemanager";
import { IHostedZone } from "aws-cdk-lib/aws-route53";

export type GlobalStackProps = {
  certificate: ICertificate;
  hostedZone: IHostedZone;
};

export class MainStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: cdk.StackProps,
    globalStackProps: GlobalStackProps
  ) {
    super(scope, id, props);

    new ClientStack(this, "s3", props, globalStackProps);
  }
}
