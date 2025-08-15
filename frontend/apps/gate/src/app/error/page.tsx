/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use client';

import React, { useState, useEffect, ReactElement } from 'react';

const FallbackErrorMessage: string = 'Sorry, but we encountered an error while processing your request.';

export default function ErrorPage(): ReactElement {
  const [errorCode, setErrorCode] = useState('');
  const [errorMsg, setErrorMsg] = useState(FallbackErrorMessage);

  useEffect(() => {
    const params: URLSearchParams = new URLSearchParams(window.location.search);

    setErrorCode(params.get('errorCode') || '');
    setErrorMsg(params.get('errorMessage') || FallbackErrorMessage);
  }, []);

  return (
    <div style={{
      padding: '24px',
      backgroundColor: '#ffebee',
      border: '1px solid #ffcdd2',
      borderRadius: '8px',
      margin: '24px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#c62828', marginTop: 0 }}>
        Something didn&apos;t go as expected!
      </h2>
      <p style={{ marginTop: '24px', color: '#424242' }}>
        {errorMsg}
      </p>
      {errorCode !== '' && (
        <p style={{ marginTop: '16px', color: '#424242' }}>
          Error Code: {errorCode}
        </p>
      )}
    </div>
  );
}
