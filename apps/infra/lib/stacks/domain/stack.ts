import { NestedStack, NestedStackProps } from "aws-cdk-lib";
import {
  Certificate,
  CertificateValidation,
  ICertificate,
} from "aws-cdk-lib/aws-certificatemanager";
import { HostedZone, IHostedZone } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";
import { Config } from "../../../config/config";

export class DomainStack extends NestedStack {
  readonly hostedZone: IHostedZone;
  readonly certUsEast: ICertificate;

  constructor(scope: Construct, id: string, props?: NestedStackProps) {
    super(scope, id, props);

    this.hostedZone = HostedZone.fromLookup(scope, "hostedZone", {
      domainName: Config.domain,
    });

    this.certUsEast = new Certificate(scope, "certificate", {
      domainName: Config.domain,
      validation: CertificateValidation.fromDns(this.hostedZone),
    });
  }
}
