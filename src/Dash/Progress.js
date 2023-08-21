/*progress component*/
export function Progress({ data }) {
    return (
        <div>
            <h4 class="small font-weight-bold">{data.title} <span class="float-right">{data.content}</span></h4>
            <div class="progress mb-4">
                <div class={`progress-bar bg-${data.color}`} role="progressbar" style={{ width: data.percent }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}