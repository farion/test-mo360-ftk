// SPDX-License-Identifier: MIT
// Copyright (c) 2020 Daimler TSS GmbH

import { Container } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import TestService from '../services/TestService';
import { inject, withInject } from '@daimler/ftk-core';

class Home extends Component<{}, {}> {

    @inject()
    private testService: TestService;

    public render() {
        return (
            <Container>
                Hallo Swidget {this.testService.test()}
            </Container>
        );
    }
};

export default withInject(Home);
