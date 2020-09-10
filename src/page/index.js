import React from 'react';

function Page({ page }) {

    return (
        <div>
            {!!page.body ? <page.body /> : null}
        </div>
    )
}

export default Page;