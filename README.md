# n8n-nodes-lago

This is an n8n community node. It lets you use Lago in your n8n workflows.

Lago is a modern, open-source billing API that enables you to integrate usage-based billing into your application. It allows you to push customer information and metrics (events) from your application to the billing system.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports operations for the following Lago API resources:

- **Analytics**: Access billing analytics data
- **Billable Metrics**: Manage billable metric collection
- **Billing Entities**: Work with billing entities
- **Customers**: Create, read, update, and delete customer information
- **Plans**: Manage subscription plans
- **Subscriptions**: Handle customer subscriptions
- **Events**: Push usage events to the billing system
- **Organizations**: Manage organization settings
- **Taxes**: Configure tax rates and settings
- **Coupons**: Create and manage discount coupons
- **Add-ons**: Work with one-time charges and credits

## Credentials

To use the Lago API, you need to set up the following credentials:

1. **API Host**: The Lago API host URL (default: https://api.getlago.com or your self-hosted instance URL)
2. **API Key**: The API key for authenticating with Lago API

You can obtain an API key by signing up for a Lago account at [getlago.com](https://www.getlago.com) or by setting up your own self-hosted instance.

## Compatibility

This node has been tested with n8n version 1.0.0 and later.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Lago API documentation](https://docs.getlago.com/api-reference/intro)
* [Lago website](https://www.getlago.com)
* [Lago GitHub repository](https://github.com/getlago/lago)

## License

[MIT](LICENSE.md)
