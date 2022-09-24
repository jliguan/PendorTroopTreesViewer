import { Aside, MediaQuery, ScrollArea } from '@mantine/core';


export default function PendorSidebar() {

    return (
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} style={{ zIndex: 0 }}>
                <ScrollArea offsetScrollbars type="never">
                    asdasd
                </ScrollArea>
            </Aside>
        </MediaQuery>

    );
}