// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getUserDetails(req, res) {
  res.status(200).json({
    cnic: '45504-1105237-3',
    name: 'MUHAMMAD IQBAL SHAIKH',
    fathersName: 'ABDUL LATIF SHAIKH',
    contact: '+923003143891',
    address: 'House No. A-55, Shalimar Bungalows Gate III, Near Mobile Mall, Block 17, Gulistan-e-Johar, Karachi',
    residentialAddress: 'House No. A-55, Shalimar Bungalows Gate III, Near Mobile Mall, Block 17, Gulistan-e-Johar, Karachi'
  })
}
