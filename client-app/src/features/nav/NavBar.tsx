import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface IProps {
    openCreateForm: () => void
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item
                    header
                >
                    <img src="/assets/logo.png" alt="logo" />
                    Reactivities
                </Menu.Item>
                <Menu.Item
                    name='Activities'
                />
                <Menu.Item>
                    <Button
                        onClick={openCreateForm}
                        className="positive ui button">Create Activity</Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
