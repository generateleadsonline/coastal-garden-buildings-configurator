import {getStore} from '@netlify/blobs';
import {createHandler} from '../../server/service.mjs';
export default createHandler(getStore);
