import Mock from 'mockjs';

const Random = Mock.Random;
const token = Random.string('upper', 32, 32);

Mock.mock('/api/login', 'post', ({ body }) => {
  const account = JSON.parse(body);
  if (account.number === '93123123' && account.password === '123123') {
    return {
      code: 200,
      data: {
        id: 1,
        name: 'enzo',
        token
      },
      msg: '查询成功'
    };
  } else {
    return {
      code: 400,
      msg: '账号或密码错误！'
    };
  }
});
