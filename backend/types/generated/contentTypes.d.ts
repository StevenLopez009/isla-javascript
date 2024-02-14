import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentacionDocumentacion extends Schema.CollectionType {
  collectionName: 'documentacions';
  info: {
    singularName: 'documentacion';
    pluralName: 'documentacions';
    displayName: 'documentacion';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text_documentation: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documentacion.documentacion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::documentacion.documentacion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPreguntaPregunta extends Schema.CollectionType {
  collectionName: 'preguntas';
  info: {
    singularName: 'pregunta';
    pluralName: 'preguntas';
    displayName: 'seccion_one';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.Text;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    felicitacion: Attribute.Text;
    protect: Attribute.String;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pregunta.pregunta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pregunta.pregunta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionEightSeccionEight extends Schema.CollectionType {
  collectionName: 'seccion_eights';
  info: {
    singularName: 'seccion-eight';
    pluralName: 'seccion-eights';
    displayName: 'Seccion_eight';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-eight.seccion-eight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-eight.seccion-eight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionElevenSeccionEleven extends Schema.CollectionType {
  collectionName: 'seccion_elevens';
  info: {
    singularName: 'seccion-eleven';
    pluralName: 'seccion-elevens';
    displayName: 'Seccion_eleven';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-eleven.seccion-eleven',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-eleven.seccion-eleven',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionFitteenSeccionFitteen extends Schema.CollectionType {
  collectionName: 'seccion_fitteens';
  info: {
    singularName: 'seccion-fitteen';
    pluralName: 'seccion-fitteens';
    displayName: 'seccion_fitteen';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-fitteen.seccion-fitteen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-fitteen.seccion-fitteen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionFiveSeccionFive extends Schema.CollectionType {
  collectionName: 'seccion_fives';
  info: {
    singularName: 'seccion-five';
    pluralName: 'seccion-fives';
    displayName: 'seccion_five';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-five.seccion-five',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-five.seccion-five',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionFourSeccionFour extends Schema.CollectionType {
  collectionName: 'seccion_fours';
  info: {
    singularName: 'seccion-four';
    pluralName: 'seccion-fours';
    displayName: 'seccion_four';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-four.seccion-four',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-four.seccion-four',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionFourteenSeccionFourteen
  extends Schema.CollectionType {
  collectionName: 'seccion_fourteens';
  info: {
    singularName: 'seccion-fourteen';
    pluralName: 'seccion-fourteens';
    displayName: 'Seccion_fourteen';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-fourteen.seccion-fourteen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-fourteen.seccion-fourteen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionNineSeccionNine extends Schema.CollectionType {
  collectionName: 'seccion_nines';
  info: {
    singularName: 'seccion-nine';
    pluralName: 'seccion-nines';
    displayName: 'Seccion_nine';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-nine.seccion-nine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-nine.seccion-nine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionSevenSeccionSeven extends Schema.CollectionType {
  collectionName: 'seccion_sevens';
  info: {
    singularName: 'seccion-seven';
    pluralName: 'seccion-sevens';
    displayName: 'Seccion_seven';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    opcion4: Attribute.String;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-seven.seccion-seven',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-seven.seccion-seven',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionSixSeccionSix extends Schema.CollectionType {
  collectionName: 'seccion_sixes';
  info: {
    singularName: 'seccion-six';
    pluralName: 'seccion-sixes';
    displayName: 'Seccion_six';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-six.seccion-six',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-six.seccion-six',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionSixteenSeccionSixteen extends Schema.CollectionType {
  collectionName: 'seccion_sixteens';
  info: {
    singularName: 'seccion-sixteen';
    pluralName: 'seccion-sixteens';
    displayName: 'seccion_sixteen';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-sixteen.seccion-sixteen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-sixteen.seccion-sixteen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionTenSeccionTen extends Schema.CollectionType {
  collectionName: 'seccion_tens';
  info: {
    singularName: 'seccion-ten';
    pluralName: 'seccion-tens';
    displayName: 'Seccion_ten';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-ten.seccion-ten',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-ten.seccion-ten',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionThirteenSeccionThirteen
  extends Schema.CollectionType {
  collectionName: 'seccion_thirteens';
  info: {
    singularName: 'seccion-thirteen';
    pluralName: 'seccion-thirteens';
    displayName: 'Seccion_thirteen';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-thirteen.seccion-thirteen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-thirteen.seccion-thirteen',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionThreeSeccionThree extends Schema.CollectionType {
  collectionName: 'seccion_threes';
  info: {
    singularName: 'seccion-three';
    pluralName: 'seccion-threes';
    displayName: 'seccion_three';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-three.seccion-three',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-three.seccion-three',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeccionTwelveSeccionTwelve extends Schema.CollectionType {
  collectionName: 'seccion_twelves';
  info: {
    singularName: 'seccion-twelve';
    pluralName: 'seccion-twelves';
    displayName: 'Seccion_twelve';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seccion-twelve.seccion-twelve',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seccion-twelve.seccion-twelve',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSecciontwoSecciontwo extends Schema.CollectionType {
  collectionName: 'secciontwos';
  info: {
    singularName: 'secciontwo';
    pluralName: 'secciontwos';
    displayName: 'seccion_two';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    enunciado: Attribute.String;
    opcion1: Attribute.String;
    opcion2: Attribute.String;
    opcion3: Attribute.String;
    opcion4: Attribute.String;
    informacion: Attribute.Text;
    opcion_correcta: Attribute.Integer;
    protect: Attribute.Text;
    imgCorrection: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::secciontwo.secciontwo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::secciontwo.secciontwo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::documentacion.documentacion': ApiDocumentacionDocumentacion;
      'api::pregunta.pregunta': ApiPreguntaPregunta;
      'api::seccion-eight.seccion-eight': ApiSeccionEightSeccionEight;
      'api::seccion-eleven.seccion-eleven': ApiSeccionElevenSeccionEleven;
      'api::seccion-fitteen.seccion-fitteen': ApiSeccionFitteenSeccionFitteen;
      'api::seccion-five.seccion-five': ApiSeccionFiveSeccionFive;
      'api::seccion-four.seccion-four': ApiSeccionFourSeccionFour;
      'api::seccion-fourteen.seccion-fourteen': ApiSeccionFourteenSeccionFourteen;
      'api::seccion-nine.seccion-nine': ApiSeccionNineSeccionNine;
      'api::seccion-seven.seccion-seven': ApiSeccionSevenSeccionSeven;
      'api::seccion-six.seccion-six': ApiSeccionSixSeccionSix;
      'api::seccion-sixteen.seccion-sixteen': ApiSeccionSixteenSeccionSixteen;
      'api::seccion-ten.seccion-ten': ApiSeccionTenSeccionTen;
      'api::seccion-thirteen.seccion-thirteen': ApiSeccionThirteenSeccionThirteen;
      'api::seccion-three.seccion-three': ApiSeccionThreeSeccionThree;
      'api::seccion-twelve.seccion-twelve': ApiSeccionTwelveSeccionTwelve;
      'api::secciontwo.secciontwo': ApiSecciontwoSecciontwo;
    }
  }
}
