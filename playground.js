const Company = require('./models/companies');
//Models 안에 있는 companies 안에 값을 가져온다
const Group = require('./models/groups');

exports.test = {
  //모듈화를 하였다
  model: () => {
    console.log('모델테스트');
   
    //객체를 생성함
    Company.findOne({ name: '테스트'})
      .then((cp) => {
        if(!cp) throw new Error('회사가 존재하지 않음');
        const gr = new Group({
          name: '소속2',
          cp_id: cp._id,
        });
        return gr.save();
      })
      .then((gr) => {
        console.log(gr);
        return Company.findOneAndUpdate(
          { _id: gr.cp_id },
          { $addToSet: { gr_ids : gr._id}},
          { new: true})
          .populate('gr_ids');
      })
      .then((r) => {
        console.log(r);
      })
      .catch(err => console.error(err));
  },
};