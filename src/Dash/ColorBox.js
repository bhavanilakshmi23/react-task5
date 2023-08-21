/*colorboxes component*/
export function ColorBox({ data }) {
    return (

        <div class="col-lg-6 mb-4">
            <div class={data.ishilight ? `card bg-${data.color} text-${data.bg} shadow` : `card bg-${data.color} text-white shadow`}>
                <div class="card-body">
                    {data.title}
                    <div class="text-red-50 small">{data.colorcode}</div>
                </div>
            </div>
        </div>
    );
}