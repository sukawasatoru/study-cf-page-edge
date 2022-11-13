/*
 * Copyright 2022 sukawasatoru
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NextRequest} from 'next/server';
import {getHello, getPublicHello, getPublicProduction} from '@/model/configuration';

const handler = async (req: NextRequest): Promise<Response> => {
  const cache = (() => {
    try {
      return req.cache;
    } catch (e) {
      return 'not implemented';
    }
  })();

  const credentials = (() => {
    try {
      return req.credentials;
    } catch (e) {
      return 'not implemented';
    }
  })();

  const headers = (() => {
    let headers = '';
    for (const [key, value] of req.headers) {
      if (headers.length) {
        headers += ', ';
      }
      headers += `'${key}=${value}'`;
    }

    return headers;
  })();

  const searchParams = (() => {
    let searchParams = '';
    for (const [key, value] of req.nextUrl.searchParams) {
      if (searchParams.length) {
        searchParams += ', ';
        searchParams += `'${key}=${value}'`;
      }
    }

    return searchParams;
  })();

  const text = await req.text();
  req.signal.throwIfAborted();

  const integrity = (() => {
    try {
      return req.integrity;
    } catch (e) {
      return 'not implemented';
    }
  })();

  const mode = (() => {
    try {
      return req.mode;
    } catch (e) {
      return 'not implemented';
    }
  })();

  const redirect = (() => {
    try {
      return req.redirect;
    } catch (e) {
      return 'not implemented';
    }
  })();

  const referrer = (() => {
    try {
      return req.referrer;
    } catch (e) {
      return 'not implemented';
    }
  })();

  const referrerPolicy = (() => {
    try {
      return req.referrerPolicy;
    } catch (e) {
      return 'not implemented';
    }
  })();

  try {
    return new Response(
      JSON.stringify(
        {
          HELLO: getHello() ?? 'undefined',
          NEXT_PUBLIC_HELLO: getPublicHello() ?? 'undefined',
          NEXT_PUBLIC_HELLO_PRODUCTION: getPublicProduction() ?? 'undefined',
          'req.geo.city': req.geo?.city ?? 'undefined',
          'req.geo.country': req.geo?.country ?? 'undefined',
          'req.geo.region': req.geo?.region ?? 'undefined',
          'req.geo.latitude': req.geo?.latitude ?? 'undefined',
          'req.geo.longitude': req.geo?.longitude ?? 'undefined',
          'req.ip': req.ip ?? 'undefined',
          'req.nextUrl.buildId': req.nextUrl.buildId ?? 'undefined',
          'req.nextUrl.flightSearchParameters': req.nextUrl.flightSearchParameters ?? 'undefined',
          'req.nextUrl.locale': req.nextUrl.locale ?? 'undefined',
          'req.nextUrl.defaultLocale': req.nextUrl.defaultLocale ?? 'undefined',
          'req.nextUrl.domainLocale': req.nextUrl.domainLocale ?? 'undefined',
          'req.nextUrl.domainLocale.defaultLocale': req.nextUrl.domainLocale?.defaultLocale ?? 'undefined',
          'req.nextUrl.domainLocale.domain': req.nextUrl.domainLocale?.domain ?? 'undefined',
          'req.nextUrl.domainLocale.http': req.nextUrl.domainLocale?.http ?? 'undefined',
          'req.nextUrl.domainLocale.locales': req.nextUrl.domainLocale?.locales ?? 'undefined',
          'req.nextUrl.searchParams': searchParams ?? 'undefined',
          'req.nextUrl.host': req.nextUrl.host ?? 'undefined',
          'req.nextUrl.hostname': req.nextUrl.hostname ?? 'undefined',
          'req.nextUrl.port': req.nextUrl.port ?? 'undefined',
          'req.nextUrl.protocol': req.nextUrl.protocol ?? 'undefined',
          'req.nextUrl.href': req.nextUrl.href ?? 'undefined',
          'req.nextUrl.origin': req.nextUrl.origin ?? 'undefined',
          'req.nextUrl.pathname': req.nextUrl.pathname ?? 'undefined',
          'req.nextUrl.hash': req.nextUrl.hash ?? 'undefined',
          'req.nextUrl.search': req.nextUrl.search ?? 'undefined',
          'req.nextUrl.password': req.nextUrl.password ?? 'undefined',
          'req.nextUrl.username': req.nextUrl.username ?? 'undefined',
          'req.nextUrl.basePath': req.nextUrl.basePath ?? 'undefined',
          'req.nextUrl.toString': req.nextUrl.toString() ?? 'undefined',
          'req.nextUrl.toJSON': req.nextUrl.toJSON() ?? 'undefined',
          'req.url': req.url ?? 'undefined',
          'req.cache': cache ?? 'undefined',
          'req.credentials': credentials ?? 'undefined',
          'req.destination': req.destination ?? 'undefined',
          'req.headers': headers ?? 'undefined',
          'req.integrity': integrity ?? 'undefined',
          'req.keepalive': req.keepalive ?? 'undefined',
          'req.method': req.method ?? 'undefined',
          'req.mode': mode ?? 'undefined',
          'req.redirect': redirect ?? 'undefined',
          'req.referrer': referrer ?? 'undefined',
          'ref.referrerPolicy': referrerPolicy ?? 'undefined',
          'req.signal': req.signal ?? 'undefined',
          'req.text': text ?? 'undefined',
        }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      });
  } catch (e) {
    const err = e as Error;
    return new Response(
      `name: ${err.name}, message: ${err.message}, cause: ${err.cause}, stack: ${err.stack}`,
      {
        status: 200,
        headers: {
          'content-type': 'text/plain',
        },
      },
    );
  }
};

export default handler;
