export const AdminModal = () => {
    return (
        <section>
            <div>
                <h1>NEW PRODUCT</h1>
                <button type="button">X</button>
            </div>
            <div>
                <input type="text" placeholder="NAME" />
                <input type="number" placeholder="PRICE ($)" />
                <input type="text" placeholder="IMAGE (URL)" />
                <textarea name="description" id="product__description" cols={30} rows={10} placeholder="SHORT DESCRIPTION"></textarea>
                <button type="submit">
                    <img src="" alt="Plus Icon" />
                    NEW PRODUCT
                </button>
            </div>
        </section>
    )
}