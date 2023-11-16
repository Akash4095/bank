import React from 'react'
import { Breadcrumb, Dropdown, Grid, Input, Menu, Table } from 'semantic-ui-react'

const Rightpage = () => {
    const options = [
        { key: 1, text: 'Dates', value: 1 },
        { key: 2, text: 'Month', value: 2 },
        { key: 3, text: 'Year', value: 3 },
    ]

    return (
        <div className='rightpage'>
            <div className='rightpage-top'>
                <div className='left-section'>
                    <span className='bold'> "Bank/Trust Account Name"</span>  - <span> "Bank Account Ref Id"</span>
                    <div style={{ marginLeft: "15px", marginTop: "15px", fontSize: "12px" }}>
                        <div>
                            <span className='bold'>Date Added </span> <span> -23/09/23</span>
                        </div>
                        <div>
                            <span className='bold'>Account Type</span>  - <span>Project Trust Account</span>
                        </div>
                        <div>
                            <span className='bold'>Financial Instutions</span>  - <span>NAB</span>
                        </div>
                        <div>
                            <span className='bold'>Status</span> - <span>Open</span>
                        </div>
                    </div>
                </div>
                <div className='right-section'>
                    <div>
                        <button className='transfer-btn'>Transfer/Close Account</button>
                        <button className='edit-btn'>Edit</button>
                        <button className='add-btn' >Add</button>
                    </div>
                    <div>
                        <Grid columns="2" divided style={{ width: "26vw", marginTop: "15px" }}>
                            <Grid.Row>
                                <Grid.Column>
                                    <div>150000</div>
                                    <div className='font13'>Current Balance</div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>230000</div>
                                    <div className='font13'>Account Intrest/ Charges</div>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                    <div>190000</div>
                                    <div className='font13'>Current Balance</div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>630000</div>
                                    <div className='font13'>Last Update</div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Section >Transactions</Breadcrumb.Section>
                        <Breadcrumb.Divider>|</Breadcrumb.Divider>
                        <Breadcrumb.Section >Bank Statements</Breadcrumb.Section>
                        <Breadcrumb.Divider>|</Breadcrumb.Divider>
                        <Breadcrumb.Section>Intrest and Charges</Breadcrumb.Section>
                        <Breadcrumb.Divider>|</Breadcrumb.Divider>
                        <Breadcrumb.Section >Todo</Breadcrumb.Section>
                        <Breadcrumb.Divider>|</Breadcrumb.Divider>
                        <Breadcrumb.Section >Journals</Breadcrumb.Section>
                    </Breadcrumb>
                </div>
                <Menu style={{ width: "400px" }}>
                    <Menu.Item active>
                        For Review
                    </Menu.Item>
                    <Menu.Item>
                        Matched
                    </Menu.Item>
                    <Menu.Item >
                        Excecuted
                    </Menu.Item>
                    <Menu.Item >
                        All
                    </Menu.Item>
                </Menu>
                <div>
                    <Dropdown clearable options={options} selection placeholder='Dates' />
                    <Input icon='search' placeholder='Search...' style={{ marginLeft: "20px" }} />
                </div>
                <div style={{ marginTop: "10px", width: "76vw" }}>
                    <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell singleLine>Date</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Spent</Table.HeaderCell>
                                <Table.HeaderCell>Recived</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    23/08/23
                                </Table.Cell>
                                <Table.Cell singleLine>Power Output</Table.Cell>
                                <Table.Cell>
                                    23455
                                </Table.Cell>
                                <Table.Cell>
                                    25000
                                </Table.Cell>
                                <Table.Cell>
                                    Creatine supplementation is the reference
                                </Table.Cell>
                                <Table.Cell>
                                    Done
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    06/09/23
                                </Table.Cell>
                                <Table.Cell singleLine>Power Output</Table.Cell>
                                <Table.Cell>
                                    40005
                                </Table.Cell>
                                <Table.Cell>
                                    65000
                                </Table.Cell>
                                <Table.Cell>
                                    Creatine supplementation is the reference
                                </Table.Cell>
                                <Table.Cell>
                                    Done
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Rightpage