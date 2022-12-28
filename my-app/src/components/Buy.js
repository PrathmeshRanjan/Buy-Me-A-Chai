import { ethers } from "ethers"

export default function Buy({state}) {
    async function buyChai(event) {
        event.preventDefault()
        const {contract} = state
        const name = document.getElementById("name").value
        const message = document.getElementById("message").value
        const amount = {value: ethers.utils.parseEther("0.01")}

        const transaction = await contract.buyChai(name, message, amount)
        await transaction.wait()
        console.log("Chai is sent!")
    }
    return (
        <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
}