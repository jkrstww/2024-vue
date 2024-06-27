<!--学生初访预约-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/appointment' }">初访</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/appointment' }">初访预约</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>

    <el-dialog
        title="心理咨询知情同意书"
        :visible.sync="dialogVisible"
        width="90%"
        :close-on-click-modal="false">
      <span>亲爱的来访者，很高兴可以和你一起工作，为保护你的权益，邀请你仔细阅读下列事项：

前言：心理咨询的介绍

· 心理咨询是咨询师与来访在安全信任的关系中，以来访的福祉为中心，为来访的自我发展与实现进行通力合作，来访者可以按自己的节奏参与到这个过程中，自由地谈论自己的所见所感，邀请咨询师走入自己的世界；咨询师通过来访者的表达，帮助来访者获得理解和更多的可能性，并从中汲取自我的力量，获得实现和发展。

· 心理咨询承认每个人在关系中都具有平等的价值，但不可否认任何关系中可能存在的权力性，为实现平等关系和权力的良性运用、及最大程度上保护来访者的权益，特邀请我们共同商讨、并在知情同意的基础上签署该知情同意书。

一、关于隐私权的知情

（一）保密：心理咨询工作中的有关信息，包括个案记录、测验资料、信件、录音、录像和其他资料，均属专业信息，在严格保密的情况下进行保存；心理咨询中所涉及来访者个人隐私及相关资料，都将受到严密保护，不会在任何场合公开。

（二）保密例外：在下列情况中，您的心理咨询师可以不经过授权，使用个人信息：1）来访者正在遭受虐待，或来访者的人身安全或心理安全，处在严重危机时，咨询师会通知来访者的家人（未成年人则为监护人）有关来访者的心理状况信息；2）来访者的行为严重威胁到自己或他人健康或安全；3）咨询师递交专业督导时，会在处理和隐匿好来访者个人信息后递交咨询报告。

（三）录音和录像：咨询师录音和录像：如需要录音录像，咨询师必须征求来访者意见，并签订相关协议；来访者录音和录像：录前可以征求咨询师意见，录音、录像资料一般只用于来访者自身使用。

二、关于伦理的知情

（一）伦理知情与保护：

咨询师受训于认知心理学，在学习认知行为和催眠治疗，我们的咨访关系遵循中国通用心理咨询伦理守则的规范（来访者可向咨询师索要、并一同了解该伦理守则的详细内容，或要求咨询师提供伦理守则获得的渠道）。但除上述外，对原有伦理守则在女性主义原则上进行补充，补充内容的概述如下：

· 文化多样性与压迫：咨询师会努力拓宽自身的受训与知识面、了解主流与非主流的社会、政治、文化背景为每位来访带来的不同经验，揭示并尊重文化与经验的差异，并对这些差异带来的影响保持持续的互动与理解，消除干扰、偏见与可能存在的歧视。

· 权力差异：咨询师承认来访者与咨询师之间固有的权力差异，有义务在尊重来访的意愿情况下，就权力关系本身对来访者进行心理学普及；咨询师需以身作则，良性利用权力差异为来访者谋取福利，但同时不会掠取或剥夺来访的控制权或其他权力；咨询师在以来访者福祉为中心的基础上才会进行自我披露；涉及到创伤治疗时，咨询师有义务保护来访者享有创伤知情，并在创伤治疗过程的推进中，不断与来访进行沟通或重新协商，并明确说明涉及的治疗问题和可能产生的影响。

· 多重关系：咨询师会持续觉察多重或重叠关系中固有的复杂性和相互冲突的优先事项。治疗师有责任监督这些关系，以防止对来访者的潜在虐待或伤害；在社会活动或其他重叠关系发生时，来访者拥有与咨询师同等或更大的权力，在做决策时，咨询师需要保持责任感以维护来访者福祉为先；咨询师不会与来访者或前来访者发生性亲密关系，也不会有任何公开或隐蔽的性行为。

· 咨询师责任制：咨询师需对来访的咨询福祉负责，故此将在其能力范围内与来访者签订知情同意书（合同），咨询师需尊重关系的完整性并承认自身训练和专业能力的局限，为来访者提供与自己继续合作或更换其他更胜任咨询师的最大可能性；咨询师会基于自身训练局限和职业需求，不断进行自我评估并持续进行学习、提高能力，在职业困境中寻求合法及符合伦理要求的帮助。

· 社会变革：咨询师会积极质疑社会（社区）对来访者或咨访关系有害的做法，如咨访关系的建立源于第三方平台或社群，当平台或社群出现危害来访者福祉的情况时，咨询师会积极非中立地倾向以来访者福祉为中心；咨询师对社会层面的信息传播控制保持警惕，并以来访者福祉为中心的情况下，对遵从和使用主流标准的压力提出质疑。

补充内容的概述基于女性主义治疗学会伦理守则（1999），来访者有权力要求咨询师提供该守则全部内容，并在困惑情况下，邀请咨询师对该守则进行解释。

（二）伦理投诉：

· 当咨询师有违反心理咨询伦理守则时，来访者可以向中国心理卫生协会进行投诉，或运用法律手段保护自己。

· 来访者因咨询师所犯伦理问题需要投诉，可要求咨询师提供关于伦理问题的投诉流程，也可登陆中国心理卫生协会网站进行了解。

三、关于咨询预约、时间、费用及请假的知情

（一）咨询预约：

咨询正式预约前，咨询师会邀请来访者填写一份咨询预约信息表（该信息表享有知情同意书中提到的隐私权）。咨询正式预约前，在来访者同意的情况下，咨询师会与来访者进行免费的30分钟会谈，会谈为网络视频进行，帮助双方通过视频的音容交流，建立关系开始前的熟悉感，并初步评估匹配度上的感觉。

（二）收费：

费用及计费方式：咨询收费标准为：每周1次咨询（隔周1次），每次人民币 368元/50分钟；特殊情况（如创伤治疗、来访外地专程面询，或咨询师去到来访城市的面询等）的时间，可以在双方共同商量的情况下，延长到90分钟或两个小节，收费按实际时间计算。

费用涨幅：咨询收费有可能会根据咨询师工作经验年限有所涨幅（受督导及签约机构监督），但咨询师会提前半年与来访者商讨，每次涨幅费用不超过100元；如是一年以上的长程咨询，会尊重来访的收入水平、在咨询中投入的时间费用和情感精力、可进行商讨；涨幅频率在2年内不会超过1次，适用维护咨访关系原则，并秉持咨访双方共同商讨原则；

付费方式：①咨询付费的方式，按照来访的需求来定，可选择一种方式固定，如有变动可按照实际情况商量调整。②可当面交费，也可以网络汇款付费，支持单次付费，如来访需一次性交费，则一次性不超过10次费用，并逐次扣除；

（三）时间：

1.咨询时间：咨询会谈的时间为50分钟/小节，因会谈内容弹性波动，时间浮动在10分钟内；采用固定预约制，确定好时间，如每周三下午三点，以后会为来访保留该固定时间，如有变动，可提前一天来商量调整。

2.请假、取消及违约：①如来访出现其他生活或工作状况需要处理，无法在固定时间咨询，可以提前12小时请假，无需收费。无故缺席需照常付费。不可抗的外力因素不扣费：如生病、手术或家中出现重大事情，或单方不可改变、逆转的事情）；②咨询师非因不可抗因素取消预约，则需要为来访者提供一次免费咨询。提醒：如有必要调整咨询形式——如从面询改为视频——可以双方讨论后决定。

四、关于来访者和咨询师其他责权义的知情

（一）来访者：

· 来访可以根据个人意愿选择咨询师，有权利选择或更换合适的咨询师，也有权利要求咨询师进行转介；来访对咨询方案、咨询收费、咨询时间享有充分的知情权和选择权；

· 来访者有权享有信息的知情权，如需要咨询师提供自身学历、培训、咨询小时数证明等，咨询师需要尽全力配合提供，提供材料可以是材料照片或复印件等形式；· 来访者对于咨询师的背景资料信息的获得，仅用于知情或在咨询师违反伦理时的投诉，不可用于其他渠道的获益。

（二）咨询师：

· 严格遵守保密等咨询行业伦理原则；心理咨询师要尽量避免与来访者之间建立咨询以外的任何其他关系。更不得利用来访者获得咨询收费以外其他利益，不和来访者以及来访者的重要他人发生性关系；心理咨询师需要尽力保证胜任能力，定期参加专业学习和案例讨论会。

· 心理咨询师不得因来访者的性别、年龄、职业、民族、国籍、宗教信仰、价值观等任何方面的因素歧视来访者；心理咨询师在咨询关系建立和维护之际，有责任在来访的要求下，让来访者了解心理咨询工作的性质、特点；向来访者介绍自己的专业背景；

· 本着对来访者负责的态度，在出现分歧时，需要与来访者对工作的重点进行讨论并达成一致意见、持续沟通甚至重新协商；

五、关于咨询范围、咨询方法和咨询关系的知情

（一）咨询范围：

婚恋家庭、情绪情感 、环境适应、心身不适、工作压力、亲子教育、职业规划、社交人际、性心理、心理成长等各个方面，均是可以讨论和咨询的范畴。注：如有危机情况，咨询师需要各地危机干预介入，则会第一时间帮来访介绍危机热线或医院等资源，如来访需要，则会积极参与到配合危机干预的过程中；

（二）咨询方法：

咨询方法会根据来访者具体的问题，以及咨询师自己所学选择，一般会选择咨询师擅长并适用的方法，咨询师的受训理论及实践，为认知行为心理学、正念及科学催眠治疗。如有困惑，来访者可要求咨询师对于以上疗法进行解释（解释与普及可以是持续的过程）。

（三）咨询关系：

咨询关系是促进咨询进行的主要条件，来访者可以按照自己的节奏，表达任何对咨询师的情感和想法，咨询师需要尽力参与其中，进行咨访关系的讨论。

（四）避免情况：

· 为避免双重关系给咨询带来的不良影响，请来访者尽量避免参加由咨询师负责主持的培训、沙龙等公开授课活动；

· 如来访与咨询师无意中出现在同一培训场合等，则咨询师需考虑保障来访者的权益和私密，咨询师需与来访者说明可能产生的影响，并率先地主动与来访者商议、在商议基础上与主办方协商退出；如有其他情况，来访在知情并同意的情况下与咨询师在同一培训场合，没有避免该会面，咨询师有义务持续关注可能对咨询产生的影响，并就此影响工作来保障来访者福祉不受侵害。

六、关于咨询转介和咨询结案的知情

（一）咨询转介：

咨询师在咨询过程中，如发现来访者有超越自己专业能力的情况，需在与来访充分讨论后，以尊重来访意愿为前提，并以专业态度参与其中，商议是否需要转介或合并咨询（如积极促进与精神科医生合作）。

（二）咨询结案：

咨询结束后，咨询师成为来访者的“前任咨询师”，仍然会保持适当专业伦理和专业界限。

七、远程咨询的知情

· 远程会谈使用腾讯会议软件、QQ视频、瞩目或zoom会议，在适宜的情况下以前两者为优先选择。腾讯会议及工作QQ账号会在预约后发送。

· 环境：远程咨询的环境需要封闭、可自由表达、不受干扰的房间；需要提前确保双方准备好电脑和远程通讯所需的设备和软件；

· 意外：如非人为因素如网络连接、软件服务器问题造成的咨询时间耽误，所耽误时间可咨访双方商量补回；如超过10分钟问题仍未解决，则本次咨询取消不收费，且可以再商量其他时间进行；

· 限制：某些远程软件可能有软件提供方的第三方随机监控和关键词过滤功能，会对咨询保密性有一定影响；如来访者对上述特点有顾忌，可以共同商量有无其他解决办法，如使用不同软件，咨询师需配合来访需求，尝试找到新的办法。

以上内容如有争议，来访者有权提交给咨询师所在地仲裁委员会仲裁解决。

八、持续协商的知情

该知情同意书的详细内容，来访者如有疑义，在后续工作中也享有与咨询师持续协商的权力。</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="nextDialog">同 意</el-button>
      </span>
    </el-dialog>

    <el-dialog
        title="首访登记表"
        :visible.sync="questionnaireDialogVisible"
        width="60%"
        :close-on-click-modal="false">
      <el-form ref="form" :model="form" label-width="80px">
        <div v-for="(question, index) in questions" :key="index">
          <div>{{ question }}</div>
          <el-radio-group class="radio-group" v-model="answers[index]" @change="calculateScore">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </div>
        <el-form-item label="危机等级">
          <span>{{ dangerLevel }}</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="questionnaireDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-card class="container">
<!--      <el-form ref="form" :model="form" label-width="80px">-->
<!--        <el-form-item label="日期">-->
<!--          <el-select v-model="form.week" placeholder="请选择日期">-->
<!--            <el-option label="周一" value="week"></el-option>-->
<!--            <el-option label="周二" value="week"></el-option>-->
<!--            <el-option label="周三" value="week"></el-option>-->
<!--            <el-option label="周四" value="week"></el-option>-->
<!--            <el-option label="周五" value="week"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="时段">-->
<!--          <el-select v-model="form.period" placeholder="请选择日期">-->
<!--            <el-option label="早一" value="period"></el-option>-->
<!--            <el-option label="早二" value="period"></el-option>-->
<!--            <el-option label="早三" value="period"></el-option>-->
<!--            <el-option label="午一" value="period"></el-option>-->
<!--            <el-option label="午二" value="period"></el-option>-->
<!--            <el-option label="午三" value="period"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--      </el-form>-->

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'appointment',
  data () {
    return {
      dialogVisible: true,
      questionnaireDialogVisible: false,
      form: {
        region: ''
      },
      questions: ['问题1：最近一周内：我曾有过消极想法',
        '问题2：最近一周内：我曾有过消极行为',
        '问题3：最近一周内，我觉得不安而平静不下来',
        '问题4：最近一周内，我吃的和平常一样多',
        '问题5：最近一周内，我对未来抱有希望',
        '问题6：最近一周内，我觉得闷闷不乐',
        '问题7：最近一周内，我的情绪比较容易激动',
        '问题8：最近一周内，我的睡眠和往常一样好',
        '问题9：最近一周内，我无缘无故感到疲乏',
        '问题10：最近一周内，我的头脑和以往一样清晰'],
      answers: Array(10).fill('否'),
      score: 0,
      dangerLevel: 'safe',
      visitRequest: {
        visitTime: '',
        sn: '',
        isDanger: false
      }
    }
  },
  methods: {
    nextDialog () {
      this.dialogVisible = false
      this.questionnaireDialogVisible = true
    },
    calculateScore () {
      this.score = this.answers.filter(answer => answer === '是').length * 10
      if (this.answers[0] === '是' || this.answers[1] === '是' || this.score >= 60) {
        this.dangerLevel = 'danger'
      } else {
        this.dangerLevel = 'safe'
      }
    }
  }
}
</script>

<style scoped>
.radio-group{
  font-size: 20px;
  line-height: 1.8;
}
</style>
