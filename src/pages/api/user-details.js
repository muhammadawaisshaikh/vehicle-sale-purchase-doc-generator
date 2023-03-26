// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { USER } from '../../utils/constants'

export default function getUserDetails(req, res) {
  res.status(200).json({
    cnic: USER.cnic,
    name: USER.name,
    fathersName: USER.fathersName,
    contact: USER.contact,
    address: USER.address,
    residentialAddress: USER.residentialAddress
  })
}
