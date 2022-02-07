function NoInternetItem(){
    return (
        <div className="grid gap-4 place-content-center h-screen">
            <div className="text-2xl">No Internet</div>
            <div></div>
            <div className="grid gap-2">
                Try :
                <ul className="mx-4">
                    <li>Checking the network cables, modem, and router</li>
                    <li>Reconnecting to Wi-Fi</li>
                </ul>
                <p className="font-thin text-sm">DNS_PROBE_FINISHED_NO_INTERNET</p>
            </div>
        </div>
    );
}

export default NoInternetItem;