/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type AdminInviteRequestsDeniedListResponse = WebAPICallResult & {
  denied_requests?: DeniedRequest[];
  error?:           string;
  needed?:          string;
  ok?:              boolean;
  provided?:        string;
};

export interface DeniedRequest {
  denied_by?:      DeniedBy;
  invite_request?: InviteRequest;
}

export interface DeniedBy {
  actor_id?:   string;
  actor_type?: string;
}

export interface InviteRequest {
  channel_ids?:    string[];
  date_created?:   number;
  email?:          string;
  id?:             string;
  invite_type?:    string;
  request_reason?: string;
  requester_ids?:  string[];
}
