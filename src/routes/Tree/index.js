import React from "react";
import { DyTree } from "@dy.design";
const data = [
  {
    uid: "480304799460360192",
    ctype: "SYSGROUP",
    name: "DBAdm",
    children: [
      {
        uid: "480304799577800704",
        ctype: "SYSROLE",
        name: "dbAdm",
        children: [
          {
            uid: "601730029373620224",
            ctype: "SYSUSER",
            name: "321321",
            key: "603538512070836225"
          },
          {
            uid: "601718608543875072",
            ctype: "SYSUSER",
            name: "dfds",
            key: "601723989903015936"
          }
        ]
      }
    ],
    key: "480304799460360192",
    project: false
  },
  {
    uid: "480304801788198912",
    ctype: "SYSGROUP",
    name: "Group Administrator",
    children: [],
    key: "480304801788198912",
    project: false
  },
  {
    uid: "605767120373940224",
    ctype: "SYSGROUP",
    name: "newTestGroup",
    children: [
      {
        uid: "603538432966262784",
        ctype: "SYSROLE",
        name: "3ffdsfdsfdsfsd",
        children: [],
        key: "605767840351387650"
      },
      {
        uid: "605767351123574784",
        ctype: "SYSROLE",
        name: "newTestRole",
        children: [
          {
            uid: "601045261866762240",
            ctype: "SYSUSER",
            name: "33",
            key: "605767880067252225"
          }
        ],
        key: "605767351257792512"
      }
    ],
    key: "605767120373940224",
    project: true
  },
  {
    uid: "565097735242383360",
    ctype: "SYSGROUP",
    name: "phone",
    children: [
      {
        uid: "565099531453071360",
        ctype: "SYSROLE",
        name: "Phone Administration",
        children: [
          {
            uid: "605763558424182784",
            ctype: "SYSUSER",
            name: "newUser",
            key: "605764034347663360"
          }
        ],
        key: "565099588927619072"
      }
    ],
    key: "565097735242383360",
    project: true
  },
  {
    uid: "480304801662369794",
    ctype: "SYSGROUP",
    name: "Project Administration",
    children: [
      {
        uid: "480304801733672960",
        ctype: "SYSROLE",
        name: "Project Administrator",
        children: [],
        key: "480304801750450176"
      }
    ],
    key: "480304801662369794",
    project: false
  },
  {
    uid: "480304801029029888",
    ctype: "SYSGROUP",
    name: "System Administrator",
    children: [
      {
        uid: "480304801058390016",
        ctype: "SYSROLE",
        name: "System Administrator",
        children: [
          {
            uid: "605767609467535360",
            ctype: "SYSUSER",
            name: "newTestUser",
            key: "606217650812485634"
          }
        ]
      }
    ],
    key: "480304801029029888",
    project: false
  },
  {
    uid: "499885286558269440",
    ctype: "SYSGROUP",
    name: "Workflow Administrator",
    children: [
      {
        uid: "499884769648050176",
        ctype: "SYSROLE",
        name: "Workflow Administrator",
        children: [],
        key: "606135540038762496"
      }
    ],
    key: "499885286558269440",
    project: false
  },
  {
    uid: "601358319604465664",
    ctype: "SYSGROUP",
    name: "事业部",
    children: [
      {
        uid: "601366797798604800",
        ctype: "SYSROLE",
        name: "通用事业部",
        children: [
          {
            uid: "601718129214619648",
            ctype: "SYSUSER",
            name: "323",
            key: "605440948813430785"
          },
          {
            uid: "565099722033856512",
            ctype: "SYSUSER",
            name: "markwang3",
            key: "605441043122356226"
          }
        ],
        key: "601366797798604801"
      },
      {
        uid: "567369391847505920",
        ctype: "SYSGROUP",
        name: "重载事业部",
        children: [
          {
            uid: "601417884354215936",
            ctype: "SYSROLE",
            name: "3r3",
            children: [
              {
                uid: "601722995852967936",
                ctype: "SYSUSER",
                name: "wang1",
                key: "601723066107559938"
              }
            ],
            key: "601417884354215937"
          },
          {
            uid: "601726313677455360",
            ctype: "SYSROLE",
            name: "rwqrwq",
            children: [
              {
                uid: "601045261866762240",
                ctype: "SYSUSER",
                name: "33",
                key: "605440985056411649"
              }
            ],
            key: "601726313744564224"
          }
        ],
        key: "567369391847505920",
        project: true
      }
    ],
    key: "601358319604465664",
    project: true
  }
];

const roleData = [
  { ctype: "SYSROLE", key: "0-0-0", name: "dbAdm", uid: "480304799577800704" },
  {
    ctype: "SYSROLE",
    key: "0-2-0",
    name: "3ffdsfdsfdsfsd",
    uid: "603538432966262784"
  },
  {
    ctype: "SYSROLE",
    key: "0-2-1",
    name: "newTestRole",
    uid: "605767351123574784"
  },
  {
    ctype: "SYSROLE",
    key: "0-3-0",
    name: "Phone Administration",
    uid: "565099531453071360"
  },
  {
    ctype: "SYSROLE",
    key: "0-4-0",
    name: "Project Administrator",
    uid: "480304801733672960"
  },
  {
    ctype: "SYSROLE",
    key: "0-5-0",
    name: "System Administrator",
    uid: "480304801058390016"
  },
  {
    ctype: "SYSROLE",
    key: "0-6-0",
    name: "Workflow Administrator",
    uid: "499884769648050176"
  },
  {
    ctype: "SYSROLE",
    key: "0-7-0",
    name: "通用事业部",
    uid: "601366797798604800"
  },
  { ctype: "SYSROLE", key: "0-7-1-0", name: "3r3", uid: "601417884354215936" },
  {
    ctype: "SYSROLE",
    key: "0-7-1-1",
    name: "rwqrwq",
    uid: "601726313677455360"
  }
];
export default class Tree extends React.Component {
  state = {
    dataSource: []
  };

  componentDidMount() {}
  //   normal: "dy-button-normal",
  //   primary: "dy-button-primary",
  //   warning: "dy-button-warning",
  //   disabled: "dy-button-disabled",
  //   strong: "dy-button-strong",
  //   ghost: "dy-button-ghost",
  Copy = () => {
    var Url2 = document.getElementsByTagName("pre")[0].innerText;
    var oInput = document.createElement("textarea");
    oInput.value = Url2;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    alert("复制成功");
  };

  /**
   * @name:
   * @test:
   * @msg: 遍历初始值
   * @param {data:人员组织结构数据, index}
   * @return: [[groupid, roleid, useid],[groupid, roleid, useid],[groupid, roleid, useid]]
   */
  mapDefaultValue = initTargets => {
    let defaultValue = [];

    initTargets.forEach(v => {
      let newArray = [];
      for (let x in v) {
        newArray.push(v[x]);
      }
      defaultValue.push(newArray);
    });
    return defaultValue;
  };

  /**
   * @name:
   * @test:
   * @msg: 加入’0-1 0-0-1‘规则类型的key到数据
   * @param {data:人员组织结构数据, index}
   * @return: data with key
   */
  mapDataSource = (data, index) => {
    index = index || 0;
    return data.map((d, i) => ({
      ...d,
      key: index + "-" + i,
      name: d.name || d.objectName,
      children: d.children
        ? this.mapDataSource(d.children, index + "-" + i)
        : null
    }));
  };

  /**
   * @name:
   * @test:
   * @msg: 获取所有角色
   * @param {data:人员组织结构数据, index}
   * @return: []:roles
   */

  loopUntilRole = (data, newData) => {
    data.forEach((v, i) => {
      if (v.ctype == "SYSROLE") {
        let item = {
          ctype: v.ctype,
          key: v.key,
          name: v.name,
          uid: v.uid
        };
        if (!newData.some(i => i.uid == v.uid)) {
          newData.push(item);
        }
      }
      if (v.children && v.children.length) {
        this.loopUntilRole(v.children, newData);
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "500px" }}>
          <DyTree
            onSelect={value => {
              console.log(value);

              //   this.setState({ targetData: value });
              //   this.props.onChange(value);
            }}
            dataSource={this.mapDataSource(data)}
            fleidName={{ title: "name", value: "uid", key: "key" }}
            defaultValue={[
              "480304799460360192",
              "480304801788198912",
              "480304799577800704"
            ]}
            nodeStyle={{ color: "#004669" }}
          />
        </div>

        <div style={{ height: "500px" }}>
          <DyTree
            onSelect={value => {
              console.log(value);

              //   this.setState({ targetData: value });
              //   this.props.onChange(value);
            }}
            singleSelecter
            dataSource={roleData}
            fleidName={{ title: "name", value: "uid", key: "key" }}
            defaultValue={["603538432966262784"]}
            nodeStyle={{ color: "#004669" }}
          />
        </div>

        <div className="codePlace">
          <pre
            dangerouslySetInnerHTML={{
              __html: toShow(`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { DyButton } from "@dy.design";
    const data = [
        {
          uid: "480304799460360192",
          ctype: "SYSGROUP",
          name: "DBAdm",
          children: [
            {
              uid: "480304799577800704",
              ctype: "SYSROLE",
              name: "dbAdm",
              children: [
                {
                  uid: "601730029373620224",
                  ctype: "SYSUSER",
                  name: "321321",
                  key: "603538512070836225"
                },
                {
                  uid: "601718608543875072",
                  ctype: "SYSUSER",
                  name: "dfds",
                  key: "601723989903015936"
                }
              ]
            }
          ],
          key: "480304799460360192",
          project: false
        },
        {
          uid: "480304801788198912",
          ctype: "SYSGROUP",
          name: "Group Administrator",
          children: [],
          key: "480304801788198912",
          project: false
        },
        {
          uid: "605767120373940224",
          ctype: "SYSGROUP",
          name: "newTestGroup",
          children: [
            {
              uid: "603538432966262784",
              ctype: "SYSROLE",
              name: "3ffdsfdsfdsfsd",
              children: [],
              key: "605767840351387650"
            },
            {
              uid: "605767351123574784",
              ctype: "SYSROLE",
              name: "newTestRole",
              children: [
                {
                  uid: "601045261866762240",
                  ctype: "SYSUSER",
                  name: "33",
                  key: "605767880067252225"
                }
              ],
              key: "605767351257792512"
            }
          ],
          key: "605767120373940224",
          project: true
        },
        {
          uid: "565097735242383360",
          ctype: "SYSGROUP",
          name: "phone",
          children: [
            {
              uid: "565099531453071360",
              ctype: "SYSROLE",
              name: "Phone Administration",
              children: [
                {
                  uid: "605763558424182784",
                  ctype: "SYSUSER",
                  name: "newUser",
                  key: "605764034347663360"
                }
              ],
              key: "565099588927619072"
            }
          ],
          key: "565097735242383360",
          project: true
        },
        {
          uid: "480304801662369794",
          ctype: "SYSGROUP",
          name: "Project Administration",
          children: [
            {
              uid: "480304801733672960",
              ctype: "SYSROLE",
              name: "Project Administrator",
              children: [],
              key: "480304801750450176"
            }
          ],
          key: "480304801662369794",
          project: false
        },
        {
          uid: "480304801029029888",
          ctype: "SYSGROUP",
          name: "System Administrator",
          children: [
            {
              uid: "480304801058390016",
              ctype: "SYSROLE",
              name: "System Administrator",
              children: [
                {
                  uid: "605767609467535360",
                  ctype: "SYSUSER",
                  name: "newTestUser",
                  key: "606217650812485634"
                }
              ]
            }
          ],
          key: "480304801029029888",
          project: false
        },
        {
          uid: "499885286558269440",
          ctype: "SYSGROUP",
          name: "Workflow Administrator",
          children: [
            {
              uid: "499884769648050176",
              ctype: "SYSROLE",
              name: "Workflow Administrator",
              children: [],
              key: "606135540038762496"
            }
          ],
          key: "499885286558269440",
          project: false
        },
        {
          uid: "601358319604465664",
          ctype: "SYSGROUP",
          name: "事业部",
          children: [
            {
              uid: "601366797798604800",
              ctype: "SYSROLE",
              name: "通用事业部",
              children: [
                {
                  uid: "601718129214619648",
                  ctype: "SYSUSER",
                  name: "323",
                  key: "605440948813430785"
                },
                {
                  uid: "565099722033856512",
                  ctype: "SYSUSER",
                  name: "markwang3",
                  key: "605441043122356226"
                }
              ],
              key: "601366797798604801"
            },
            {
              uid: "567369391847505920",
              ctype: "SYSGROUP",
              name: "重载事业部",
              children: [
                {
                  uid: "601417884354215936",
                  ctype: "SYSROLE",
                  name: "3r3",
                  children: [
                    {
                      uid: "601722995852967936",
                      ctype: "SYSUSER",
                      name: "wang1",
                      key: "601723066107559938"
                    }
                  ],
                  key: "601417884354215937"
                },
                {
                  uid: "601726313677455360",
                  ctype: "SYSROLE",
                  name: "rwqrwq",
                  children: [
                    {
                      uid: "601045261866762240",
                      ctype: "SYSUSER",
                      name: "33",
                      key: "605440985056411649"
                    }
                  ],
                  key: "601726313744564224"
                }
              ],
              key: "567369391847505920",
              project: true
            }
          ],
          key: "601358319604465664",
          project: true
        }
      ];
      


const roleData = [
    { ctype: "SYSROLE", key: "0-0-0", name: "dbAdm", uid: "480304799577800704" },
    {
      ctype: "SYSROLE",
      key: "0-2-0",
      name: "3ffdsfdsfdsfsd",
      uid: "603538432966262784"
    },
    {
      ctype: "SYSROLE",
      key: "0-2-1",
      name: "newTestRole",
      uid: "605767351123574784"
    },
    {
      ctype: "SYSROLE",
      key: "0-3-0",
      name: "Phone Administration",
      uid: "565099531453071360"
    },
    {
      ctype: "SYSROLE",
      key: "0-4-0",
      name: "Project Administrator",
      uid: "480304801733672960"
    },
    {
      ctype: "SYSROLE",
      key: "0-5-0",
      name: "System Administrator",
      uid: "480304801058390016"
    },
    {
      ctype: "SYSROLE",
      key: "0-6-0",
      name: "Workflow Administrator",
      uid: "499884769648050176"
    },
    {
      ctype: "SYSROLE",
      key: "0-7-0",
      name: "通用事业部",
      uid: "601366797798604800"
    },
    { ctype: "SYSROLE", key: "0-7-1-0", name: "3r3", uid: "601417884354215936" },
    {
      ctype: "SYSROLE",
      key: "0-7-1-1",
      name: "rwqrwq",
      uid: "601726313677455360"
    }
  ];

    class Tree extends React.PureComponent {
       

        /**
         * @name:
         * @test:
         * @msg: 遍历初始值
         * @param {data:人员组织结构数据, index}
         * @return: [[groupid, roleid, useid],[groupid, roleid, useid],[groupid, roleid, useid]]
         */
        mapDefaultValue = initTargets => {
          let defaultValue = [];
      
          initTargets.forEach(v => {
            let newArray = [];
            for (let x in v) {
              newArray.push(v[x]);
            }
            defaultValue.push(newArray);
          });
          return defaultValue;
        };
      
        /**
         * @name:
         * @test:
         * @msg: 加入’0-1 0-0-1‘规则类型的key到数据
         * @param {data:人员组织结构数据, index}
         * @return: data with key
         */
        mapDataSource = (data, index) => {
          index = index || 0;
          return data.map((d, i) => ({
            ...d,
            key: index + "-" + i,
            name: d.name || d.objectName,
            children: d.children
              ? this.mapDataSource(d.children, index + "-" + i)
              : null
          }));
        };

        render(){
            return       <React.Fragment>
                                <div style={{ height: "500px" }}>
                                <DyTree
                                    onSelect={value => {
                                    console.log(value);
                        
                                    //   this.setState({ targetData: value });
                                    //   this.props.onChange(value);
                                    }}
                                    dataSource={this.mapDataSource(data)}
                                    fleidName={{ title: "name", value: "uid", key: "key" }}
                                    defaultValue={[
                                    "480304799460360192",
                                    "480304801788198912",
                                    "480304799577800704"
                                    ]}
                                    nodeStyle={{ color: "#004669" }}
                                />
                                </div>
                        
                                <div style={{ height: "500px" }}>
                                <DyTree
                                    onSelect={value => {
                                    console.log(value);
                        
                                    //   this.setState({ targetData: value });
                                    //   this.props.onChange(value);
                                    }}
                                    singleSelecter
                                    dataSource={roleData}
                                    fleidName={{ title: "name", value: "uid", key: "key" }}
                                    defaultValue={["603538432966262784"]}
                                    nodeStyle={{ color: "#004669" }}
                                />
                                </div>
                            </React.Fragment>
        }
    }

    ReactDOM.render(<Tree />, DomNode);
            `)
            }}
          />
          <button onClick={() => this.Copy()}>复制</button>
        </div>
        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">onSelect: 选中事件</div>
        <div className="desc">dataSource: 参照我们的组织结构数据</div>
        <div className="desc">fleidName: 指定数据的字段名称</div>
        <div className="desc">defaultValue: 初始默认值</div>
        <div className="desc">
          singleSelecter: 如果数据只有一层 且需要单选 传入这个参数 类型：
          boolean
        </div>
      </React.Fragment>
    );
  }
}
