import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LagoApi implements ICredentialType {
	name = 'lagoApi';
	displayName = 'Lago API';
	documentationUrl = 'https://docs.getlago.com/api-reference/intro';
	properties: INodeProperties[] = [
		{
			displayName: 'API Host',
			name: 'url',
			type: 'string',
			default: 'https://api.getlago.com',
			required: true,
			description:
				'The Lago API host URL (e.g. https://api.getlago.com or your self-hosted instance URL)',
		},
		{
			displayName: 'API Key',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'The API key for authenticating with Lago API',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: 'Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '/api/v1/organizations',
			method: 'GET',
		},
	};
}
